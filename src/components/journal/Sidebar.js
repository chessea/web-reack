import React from 'react'
import { JournalEntries } from './JournalEntries'

export const Sidebar = () => {
    return (

        <aside className="journal__sidebar">
            <div className="journal__sidebar-navbar">

                <h3 className="mt-5">
                    <i className="fa fa-moon"></i>
                    <span> Franco</span>
                </h3>
                <botton className="btn">
                    Logout

                </botton>

                <div className="journal__new-entry">
                    <i className="far fa-calendar-plus fa-5x"></i>
                    <p className="mt-5">
                        New Entry
                    </p>

                </div>
            </div>
            <JournalEntries/>


        </aside>
    )
}
