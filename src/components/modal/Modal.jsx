import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function Modal({ name, address, pincode, phoneNumber, setName, setAddress, setPincode, setPhoneNumber, buyNow }) {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <>
            <div className="  text-center rounded-lg text-white font-bold">
                <button
                    type="button"
                    onClick={openModal}
                    className="w-full  bg-orange-500 py-2 text-center rounded-lg text-white font-bold "
                >
                    Buy Now
                </button>
            </div>
        </>
    )
}