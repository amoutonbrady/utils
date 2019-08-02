/**
 * Small wrapper around a promise that returns a tuple similar to how Go manage it's errors
 *
 * @param {Promise<TSuccess>} promise The promise the be wrapped around
 * @example
 *
 * const url = 'https://jsonplaceholder.typicode.com/posts';
 * const promise = fetch(url).then(r => r.json());
 * const [err, body] = await resolve(promise);
 *
 * if (err) console.error(`There was an error: ${err.message}`);
 * else console.info(`Success: ${body}`)
 *
 * @author Alexandre Mouton-Brady
 */
export const resolve = <TSuccess = any, TError = Error>(promise: Promise<TSuccess>) => promise
    .then((data: TSuccess) => [null, data] as [null, TSuccess])
    .catch((error: TError) => [error, null] as [TError, null]);
