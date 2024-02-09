package com.example.demo.Controller;

// import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.Model.Contact;
import com.example.demo.Service.ContactService;

import java.util.List;

@RestController
@RequestMapping("/api/contact")
public class ContactController {

    private final ContactService contactService;

    
    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    @PostMapping("/post")
    public Contact handleContactForm(@RequestBody Contact contact) {
        return contactService.saveContact(contact);
    }

    @GetMapping("/get")
    public List<Contact> getAllContacts() {
        return contactService.getAllContacts();
    }

    @GetMapping("/get/{id}")
    public Contact getContactById(@PathVariable Long id) {
        return contactService.getContactById(id);
    }

    @PutMapping("/update/{id}")
    public Contact updateContact(@PathVariable Long id, @RequestBody Contact updatedContact) {
        return contactService.updateContact(id, updatedContact);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteContact(@PathVariable Long id) {
        return contactService.deleteContact(id);
    }
}
