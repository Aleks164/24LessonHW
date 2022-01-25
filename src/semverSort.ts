export const semverSort = (args: string[]): string[] =>
  args
    .map((a) =>
      a
        .split(".")
        .map((n) => +n + 100)
        .join(".")
    )
    .sort()
    .map((a) =>
      a
        .split(".")
        .map((n) => +n - 100)
        .join(".")
    );
