interface argsPromise {
  (): Promise<number>;
}

export class Parallel {
  private readonly threads;

  private readonly result: number[] = [];

  constructor(n: number) {
    this.threads = n;
  }

  async jobs(...args: argsPromise[]): Promise<number[]> {
    const jobs = [...args];
    const jobsCount = args.length;

    return new Promise((resolve) => {
      if (this.threads > jobsCount) {
        throw new Error(
          "Number of threads should not be more than number of jobs"
        );
      }

      const chain = (): void => {
        const currentJob = jobs.shift();
        if (currentJob) {
          currentJob()
            .then((value) => {
              this.result.push(value);
              if (this.result.length === jobsCount) {
                return resolve(this.result);
              }

              return chain();
            })
            .catch((e) => console.error(e));
        }
      };

      for (let i = 0; i < this.threads; i++) {
        chain();
      }
    });
  }
}
