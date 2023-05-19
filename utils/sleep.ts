export function sleep(seconds = 1, error = false) {
  return new Promise((resolve, reject) =>
    setTimeout(
      () => (error ? reject(new Error("error")) : resolve(null)),
      seconds * 1000
    )
  );
}
