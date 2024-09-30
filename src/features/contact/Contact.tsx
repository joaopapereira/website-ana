import React from 'react';
import  './Contact.module.css';
import { useAppSelector, useAppDispatch } from '../../app/hooks';



export function Contact() {
    const count = useAppSelector(selectCount);
    const dispatch = useAppDispatch();
    const [incrementAmount, setIncrementAmount] = useState('2');
  
    const incrementValue = Number(incrementAmount) || 0;
    return (<section id="contact" className="contact">
      <div className="container">
      <input
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
      </div>
    </section>)
}
