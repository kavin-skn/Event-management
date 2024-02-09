package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.Model.Event;
import com.example.demo.Service.EventService;

import java.util.List;

@RestController
@RequestMapping("/api/events")
public class EventController {

    private final EventService eventService;

    @Autowired
    public EventController(EventService eventService) {
        this.eventService = eventService;
    }

    @GetMapping
    public List<Event> getAllEvents() {
        return eventService.getAllEvents();
    }

    @GetMapping("/{id}")
    public Event getEventById(@PathVariable Long id) {
        return eventService.getEventById(id).orElse(null);
    }

    @PostMapping
    public Event createEvent(@RequestBody Event event) {
        return eventService.saveEvent(event);
    }

    @PutMapping("/{id}")
    public Event updateEvent(@PathVariable Long id, @RequestBody Event updatedEvent) {
        Event existingEvent = eventService.getEventById(id).orElse(null);

        if (existingEvent != null) {
            existingEvent.setEventName(updatedEvent.getEventName()); // Updated getter and setter
            existingEvent.setEventDate(updatedEvent.getEventDate()); // Updated getter and setter
            existingEvent.setDescription(updatedEvent.getDescription());

            return eventService.saveEvent(existingEvent);
        } else {
            // Handle not found scenario
            return null;
        }
    }

    @DeleteMapping("/{id}")
    public String deleteEvent(@PathVariable Long id) {
        eventService.deleteEvent(id);
        return "Event with id " + id + " deleted successfully.";
    }
}
