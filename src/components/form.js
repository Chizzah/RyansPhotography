import Airform from 'react-airform'
 
const Form = () => (
  <Airform className="flex flex-col justify-center items-center lg:w-128" email="ryandammert@gmail.com">
    <label for="name" className="hidden">Name</label>
    <input className="w-64 mb-4 py-3 px-3 bg-gray-100 rounded-full focus:outline-none lg:w-96" type="text" name="name" placeholder="Name" required />
    <label for="email" className="hidden">Email</label>
    <input className="w-64 mb-4 py-3 px-3 bg-gray-100 rounded-full focus:outline-none lg:w-96" type="email" name="email" placeholder="Email" required />
    <label for="message" className="hidden">Message</label>
    <textarea className="w-64 px-3 bg-gray-100 h-32 mb-4 rounded-lg focus:outline-none lg:w-96" name="message" placeholder="Message" required></textarea>
    <button className="w-64 py-3 bg-gray-900 text-gray-100 font-semibold rounded-full shadow-md focus:outline-none hover:bg-gray-700 lg:w-96">Send Message</button>
  </Airform>
)

export default Form