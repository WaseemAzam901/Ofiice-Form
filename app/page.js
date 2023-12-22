import CheckingContactForm from '@/components/CheckingContactForm'
import ContactForm from '@/components/ContactForm'
// import OfficeContactForm from '@/components/OfficeContactform'
import OfficeContactForm from "@/components/OfficeContactForm"

export default function Home() {
  return (
    <>
    <div className="p-4 max-w-3xl m-auto">
    <h1 className="text-3xl font-bold">Contact Us</h1>
    <p>Please fill in the form below</p>
    <ContactForm />
    {/* <CheckingContactForm /> */}
    {/* <OfficeContactForm /> */}
    </div>
    </>
  )
}
