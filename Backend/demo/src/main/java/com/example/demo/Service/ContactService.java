package com.example.demo.Service;


// import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.Contact;
import com.example.demo.Repository.ContactRepository;

import java.util.List;

@Service
public class ContactService {

    private final ContactRepository contactRepository;

    
    public ContactService(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    @SuppressWarnings("null")
    public Contact saveContact(Contact contact) {
        return contactRepository.save(contact);
    }

    public List<Contact> getAllContacts() {
        return contactRepository.findAll();
    }

    @SuppressWarnings("null")
    public Contact getContactById(Long id) {
        return contactRepository.findById(id).orElse(null);
    }

    public Contact updateContact(Long id, Contact updatedContact) {
        @SuppressWarnings("null")
        Contact existingContact = contactRepository.findById(id).orElse(null);

        if (existingContact != null) {
            existingContact.setName(updatedContact.getName());
            existingContact.setEmail(updatedContact.getEmail());
            existingContact.setMessage(updatedContact.getMessage());

            return contactRepository.save(existingContact);
        } else {
            return null; // Handle not found scenario
        }
    }

    @SuppressWarnings("null")
    public String deleteContact(Long id) {
        if (contactRepository.existsById(id)) {
            contactRepository.deleteById(id);
            return "Contact with id " + id + " deleted successfully.";
        } else {
            return "Contact with id " + id + " not found.";
        }
    }
}
