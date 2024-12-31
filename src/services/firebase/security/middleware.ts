import { NextFunction, Request, Response } from 'express'
import { TokenVerification } from './tokenVerification'
import { TokenVerificationError } from './types'

export async function authMiddleware(
  req: Request, 
  res: Response, 
  next: NextFunction
) {
  try {
    const authHeader = req.headers.authorization
    if (!authHeader?.startsWith('Bearer ')) {
      throw new Error('No token provided')
    }

    const token = authHeader.split('Bearer ')[1]
    const isValid = await TokenVerification.verifyToken(token)

    if (!isValid) {
      throw new Error('Invalid token')
    }

    next()
  } catch (error) {
    const verificationError = error as TokenVerificationError
    res.status(401).json({
      error: 'Unauthorized',
      message: verificationError.message,
      code: verificationError.code
    })
  }
}