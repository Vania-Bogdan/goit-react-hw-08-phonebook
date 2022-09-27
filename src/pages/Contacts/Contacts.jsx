import {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import toast, { Toaster } from 'react-hot-toast';

import AddForm from "components/AddForm/AddForm";
import Filter from "components/Filter/Filter";
import ContactList from 'components/ContactList/ContactList';

import Loader from "components/Loader/Loader";
import { addContact, deleteContact, fetchContacts } from '../../redux/contacts/contacts-operation';
import { setFilter } from '../../redux/filter/filter-slice';
import { getFilter, visibleContacts, getLoaderStatus } from '../../redux/selectors';



const Contacts = () => {
    const contacts = useSelector(visibleContacts);  
    const filter = useSelector(getFilter);
    const isLoaderActive = useSelector(getLoaderStatus);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const onAddContact = (payload) => {
        const isContact = contacts.find(
            item => item.name.toLowerCase() === payload.name.toLowerCase());
    if(isContact){
        toast.error(`${payload.name} is already in contact`);
        return;
    };
    const action = addContact(payload);
    dispatch(action)
    };

    const onRemoveContact = (payload) => {
        dispatch(deleteContact(payload))
    };

    const onSetFilter = (event) => {
        dispatch(setFilter(event.target.value))
    };
    
    return (
    <div className="contacts-block">
        <h1>Phonebook</h1>
        <AddForm onSubmit={onAddContact}/>
        <h2>Contacts</h2>
        <Filter value={filter} onChange={onSetFilter} />
        {isLoaderActive && <Loader />}
        <ContactList contacts={contacts} onRemoveContact={onRemoveContact}/>
        <Toaster />
    </div>
    );
};

export default Contacts;