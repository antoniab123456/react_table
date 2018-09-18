let filter = {
    firstNameAsc: (e, contacts) => {
        e.target.className = 'asc_order';
        return contacts.map(contact => {return contact}).sort((a, b) => {
            if (a.firstName > b.firstName)
            return -1;
            if (a.firstName < b.firstName)
            return 1;
            return 0;
        });
    },
    firstNameDesc: (e, contacts) => {
        e.target.className = 'desc_order';
        return contacts.map(contact => {return contact}).sort((a, b) => {
            if (a.firstName < b.firstName)
            return -1;
            if (a.firstName > b.firstName)
            return 1;
            return 0;
        });
    },
    lastNameAsc: (e, contacts) => {
        e.target.className = 'asc_order';
        return contacts.map(contact => {return contact}).sort((a, b) => {
            if (a.lastName > b.lastName)
            return -1;
            if (a.lastName < b.lastName)
            return 1;
            return 0;
        });
    },
    lastNameDesc: (e, contacts) => {
        e.target.className = 'desc_order';
        return contacts.map(contact => {return contact}).sort((a, b) => {
            if (a.lastName < b.lastName)
            return -1;
            if (a.lastName > b.lastName)
            return 1;
            return 0;
        });
    },
    idAsc: (e, contacts) => {
        e.target.className = 'asc_order';
        return contacts.map(contact => {return contact}).sort((a, b) => {
            return a.id - b.id;
        });
    },
    idDesc: (e, contacts) => {
        e.target.className = 'desc_order';
        return contacts.map(contact => {return contact}).sort((a, b) => {
            return b.id - a.id;
        })
    },
    emailAsc: (e, contacts) => {
        e.target.className = 'asc_order';
        return contacts.map(contact => {return contact}).sort((a, b) => {
            if (a.email > b.email)
            return -1;
            if (a.email < b.email)
            return 1;
            return 0;
        });
    },
    emailDesc: (e, contacts) => {
        e.target.className = 'desc_order';
        return contacts.map(contact => {return contact}).sort((a, b) => {
            if (a.email < b.email)
            return -1;
            if (a.email > b.email)
            return 1;
            return 0;
        });
    },
}

module.exports = filter;