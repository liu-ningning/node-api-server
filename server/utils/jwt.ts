import JWT from 'jsonwebtoken'

const scheme = 'Bearer'
const secret = 'HZYtoRlKarxhycNs'
const DEFAULT_EXPIRES_IN = '72h'

interface objects {
  [key: string]: any
}

/**
 * Get a JWT token like `scheme` + ' ' + `token`
 *
 * @param {object} payload (defaults: {})
 * @param {string} expiresIn (defaults: 1d)
 * @return {string}
 */
function getToken(payload: object = {}, expiresIn: string | number = DEFAULT_EXPIRES_IN): string {
  return [scheme, JWT.sign(payload, secret as string, { expiresIn })].join(' ')
}

/**
 * Get JWT payload
 *
 * @param {string } token JWT token like `scheme` + ' ' + `token`
 * @return {object | string}
 */
function getJWTPayload(token: string): objects | string {
  const [, tokenWithoutScheme] = token.split(' ')

  return JWT.verify(tokenWithoutScheme, secret as string)
}

export { getToken, getJWTPayload, scheme }
