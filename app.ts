import { Router } from "express";
import db from "./db";

let router = Router();


router.get("/domain", async (req, res) => {
  try {
    let conn = await db();

    const [results] = await conn.query("select * from mm_domains");
    res.json({
      message: "Domain created successfully",
      data: results,
    });
  } catch (error: any) {
    return res.status(500).send(error.message);
  }
});





export default router;
