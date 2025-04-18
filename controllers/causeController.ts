import { Request, Response } from "express";
import Cause from "../models/causeModel";

export const createCauseFunc = async (req: Request, res: Response) => {
    try {
        console.log(req.body);
        const { } = req.body;
        const causeResponse = await Cause.create(req.body);

        res.json({
            success: true, message: "cause fetched", causeData: causeResponse
        })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "fetching failed" });
    }
};0

export const fetchUserCausesFunc = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    const { userId } = req.params;
    const userCausesResponse = await Cause.find({ ngoRef: userId }).lean();

    res.json({
      success: true, message: "cause fetched", causeData: userCausesResponse
    })

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "fetching failed" });
  }
};

export const fetchCausesFunc = async (req: Request, res: Response) => {
  try {
    const fetchCausesResponse = await Cause.find().lean();

    res.json({
      success: true, message: "cause fetched", causeData: fetchCausesResponse
    })

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "fetching failed" });
  }
};
