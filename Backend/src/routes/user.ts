import { Hono } from "hono"
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from "hono/jwt"
import { signupInput, signinInput } from "shahzad_malik_common_types"

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string,

  },
  Variables: {
    userid: string,

  }
}>()

userRouter.post('/signup', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const body = await c.req.json()
  const { success } = signupInput.safeParse(body)

  if(!success){
    return c.json({msg:"Wrong Inputs"})
  }


  try {
    const user = await prisma.users.create({
      data: {
        email: body.email,
        name: body.name,
        password: body.password,
      }
    })

    const token = await sign({ id: user.id }, c.env.JWT_SECRET)
    return c.json({
      jwt: token
    })


  } catch (error) {
    return c.json({
      msg: "Some Error"
    })

  }
})

userRouter.post('/signin', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())


  const body = await c.req.json()
  const { success } = signinInput.safeParse(body)

  if(!success){
    return c.json({msg:"Wrong Inputs"})
  }
  
  const user = await prisma.users.findUnique({
    where: {
      email: body.email,
      password: body.password
    }
  })
  if (!user) {
    return c.json({
      msg: "User not Found"
    })
  }

  const token = await sign({ id: user.id }, c.env.JWT_SECRET)
  return c.json({
    msg: token
  })


})
