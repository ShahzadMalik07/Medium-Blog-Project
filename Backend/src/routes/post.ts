import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { verify } from "hono/jwt";

export const postRouter = new Hono<{
    Bindings: {
      DATABASE_URL: string,
      JWT_SECRET: string,
  
    },
    Variables: {
      userid: string,
    
    }
  }>()

  postRouter.use('/*', async (c, next) => {
    const header = c.req.header("authorization") || ""
  
    const user = await verify(header, c.env.JWT_SECRET)
  
    if (!user) {
      return c.json({
        msg: "unauthorized"
      })
  
    } else {
  
      c.set("userid", user.id as string)
      await next()
  
    }
  
  })
  
postRouter.post('/', async (c) => {
    const userid = c.get("userid")
    console.log(userid)
  
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
  
    const body = await c.req.json()
    const post = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: userid
      }
    })
  
  
  
    return c.json({
      id: post.id
    })
  })
  
  
  postRouter.put('/edit',async (c) => {
    const userid = c.get("userid")
    const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
  
    const body = await c.req.json()
  
   const update = await prisma.post.update({
      where:{
        id: body.id,
        authorId: userid
      },
      data:{
        title:body.title,
        content:body.content
      }
    })
  
  
    return c.json({
      msg:"updated successfully",
      updated:update
    })
  })
  

  postRouter.get('/bulk',async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())
      const posts = await prisma.post.findMany({
        select:{
          title: true,
          content: true,
          id:true,
          author:{
            select:{
              name:true
            }
          }


        }
      })
    return c.json({posts: posts})
  })
  
  postRouter.get('/:id', async (c) => {
   const id = await c.req.param("id")
  
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())
  
      const singlepost = await prisma.post.findFirst({
        where:{
          id
        },
        select:{
          title:true,
          content:true,
          id:true,
          author:{
            select:{
              name:true
            }
          }
        }
      })
  
    return c.json({
      post:singlepost
    })
  })
  

