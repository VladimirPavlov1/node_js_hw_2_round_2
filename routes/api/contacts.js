const router = require("express").Router();

const contacts = require("../../models/contacts")

router.get("/", async (req, res) => {

    const result = await contacts.listContacts();
    res.json(result)
});
router.get("/:id", async (req, res) => {

    const { id } = req.params;

    const result = await contacts.getContactById(id);


    res.json(result)

});
router.post("/", async (req, res) => {


    const { name, email, phone } = req.body;

    const result = await contacts.addContact(name, email, phone)

    res.status(201).json(result)

});
router.put("/:id", async (req, res) => {

    const { id } = req.params;

    const body = req.body


    const result = await contacts.updateContact(id, body);


    res.json(result)

});
router.delete("/:id", async (req, res) => {

    const { id } = req.params;
    const result = await contacts.removeContact(id);

    res.json({ message: "delete succes" })

})


module.exports = router;
