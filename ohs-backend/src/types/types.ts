import { JwtUser } from 'src/auth/jwt.strategy';

declare global {
  namespace Express {
    export interface User extends JwtUser {}
  }
}
