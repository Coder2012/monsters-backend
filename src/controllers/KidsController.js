const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function AddKid(req, res) {
  try {
    const kidsdata = await prisma.kids.create({
      data: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        monster: req.body.monster,
        points: req.body.points,
      },
    });

    console.log(kidsdata);

    return res.status(201).json({ msg: "Kid successfully added!" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ msg: "Error adding kid" });
  }
}

async function FetchAllKids(req, res) {
  try {
    const kidsdata = await prisma.kids.findMany({
      select: {
        id: true,
        firstName: true,
        lastName: true,
        monster: true,
        points: true,
        taskList: true,
        createdAt: true,
      },
    });

    return res.status(201).json(kidsdata);
  } catch (error) {
    return res.status(400).json({ msg: "Error Fetching kids" });
  }
}

async function FetchOneKid(req, res) {
  try {
    const kidsdata = await prisma.kids.findUnique({
      where: {
        id: req.params.id,
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        monster: true,
        points: true,
        taskList: true,
        createdAt: true,
      },
    });

    return res.status(201).json(kidsdata);
  } catch (error) {
    return res.status(400).json({ msg: "Error Fetching kid" });
  }
}

async function UpdateOneKid(req, res) {
  try {
    let taskList;
    if (req.body.taskList) {
      taskList = JSON.parse(req.body.taskList);
    }
    await prisma.kids.update({
      where: {
        id: req.params.id,
      },
      data: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        monster: req.body.monster,
        points: req.body.points,
        taskList,
      },
    });

    return res.status(201).json({ msg: "Kid successfully updated!!" });
  } catch (error) {
    return res.status(400).json({ error, msg: "Error updating kid" });
  }
}

async function DeleteOneKid(req, res) {
  try {
    await prisma.kids.delete({
      where: {
        id: req.params.id,
      },
    });

    return res.status(201).json({ msg: "Kid successfully deleted!!" });
  } catch (error) {
    return res.status(400).json({ error, msg: "Error deleting Kid" });
  }
}

module.exports = {
  AddKid,
  FetchAllKids,
  FetchOneKid,
  UpdateOneKid,
  DeleteOneKid,
};
