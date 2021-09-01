import { getMaxListeners } from 'process';
import React, { ReactElement } from 'react'
import { useState } from 'react'

interface Address {
    line1: string,
    line2: string,
    city: string,
    pincode: number,
    state: string
}

interface UserProp {
    name: string,
    age: number,
    email: string,
    phoneNo: number,
    address: Address,
}

type checkOutStep = 'First' | 'Details' | 'Payment' | 'Shipping';

export default function User() {

    const [user, setUser] = useState<UserProp | null>(null);
    const [open, setOpen] = useState(false);
    const [checkOutStep, setCheckOutStep] = useState<checkOutStep>('First');

    const fetchUser = () => {
        setOpen(true);
        setUser({
            name: 'Darshil Jadav',
            age: 21,
            email: 'darshil.sublime@gmail.com',
            phoneNo: 9924756510,
            address: {
                line1: '201, Om Residency',
                line2: 'Vandematarm Road, Gota',
                pincode: 382481,
                city: 'Ahmedabad',
                state: 'Gujarat'
            }
        })
    }

    return (
        <div>
            <>
                <button onClick={fetchUser} >Fetch User Details</button>
                <button onClick={() => { setCheckOutStep('Details'); setOpen(false) }}>Proceed To Payment Method</button>
            </>
            {user && open &&
                <>
                    <h1>{`Name: ${user.name}`}</h1>
                    <p>{`Age: ${user.age}`}</p>
                    <p>{`Email: ${user.email}`}</p>
                    <p>{`Phone Number: ${user.phoneNo}`}</p>
                </>
            }

            {checkOutStep === 'Details' && (
                <>
                    <h1>Details</h1>
                    <button onClick={() => setCheckOutStep('Payment')} >Next</button>
                </>
            )}

            {checkOutStep === 'Payment' && (
                <>
                    <h1>Payment</h1>
                    <button onClick={() => setCheckOutStep('Shipping')} >Next</button>
                </>
            )}

            {checkOutStep === 'Shipping' && (
                <>
                    <h1>Shipping</h1>
                </>
            )}
        </div>
    )
}
