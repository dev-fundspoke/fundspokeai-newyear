import { collection, doc, setDoc, Timestamp } from 'firebase/firestore'
import { db } from '../../config/firebase'
import { Contact } from '../../components/CompanyForm/types/formTypes'

class ContactService {
  private static instance: ContactService
  
  private constructor() {}

  static getInstance(): ContactService {
    if (!ContactService.instance) {
      ContactService.instance = new ContactService()
    }
    return ContactService.instance
  }

  async createContacts(companyId: string, contacts: Contact[], secondaryContact: Omit<Contact, 'contactId'>) {
    try {
      // Create primary contacts
      const contactsRef = collection(db, `companies/${companyId}/contacts`)
      
      for (const contact of contacts) {
        await setDoc(doc(contactsRef, contact.contactId), {
          ...contact,
          createdAt: Timestamp.fromDate(new Date(contact.createdAt)),
          updatedAt: Timestamp.fromDate(new Date(contact.updatedAt))
        })
      }

      // Create secondary contact
      await setDoc(doc(contactsRef, 'secondaryContact'), {
        ...secondaryContact,
        createdAt: Timestamp.fromDate(new Date(secondaryContact.createdAt)),
        updatedAt: Timestamp.fromDate(new Date(secondaryContact.updatedAt))
      })

    } catch (error) {
      console.error('Error creating contacts:', error)
      throw error
    }
  }
}

export const contactService = ContactService.getInstance()