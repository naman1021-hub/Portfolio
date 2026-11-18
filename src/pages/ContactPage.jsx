import React from 'react';
import { Contact } from '../components/Contact';
export const ContactPage = ({ onNotify }) => {
    return (<main>
      <Contact onNotify={onNotify}/>
    </main>);
};
