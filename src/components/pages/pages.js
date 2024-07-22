import React, { useContext, useState } from 'react';
import Home from './home/home'
import Endorsements from './endorsements/endorsements'
import Experience from './experience/experience'
import PageContext  from '../navbar/page_context';
import CheckMembership from './checkMembership/checkMembership';
import BecomeAMember from './becomeAMember/becomeAMember';
import Donate from './donate/donate'

const Pages = ({menu_state}) => {
    const {page, setPage} = useContext(PageContext)

    const renderPage = () => {
        console.log(page)

        switch(page.page){
            case 0:
                
                return (
                    <Home menu_state = {menu_state} />
                );
            case 1:
                
                return (
                    <Endorsements menu_state = {menu_state} />
                );
            case 2:
                
                return (
                    <Experience menu_state = {menu_state} />
                );
            case 3:
                
                return (
                    <CheckMembership menu_state = {menu_state} />
                );
            case 4:
                
                return (
                    <BecomeAMember menu_state = {menu_state} />
                );
                case 5:
                    
                    return (
                        <Donate menu_state = {menu_state} />
                    );
            default:
                
                return (
                    <Home menu_state = {menu_state} />
                );
        }
    }

  return (
    <div>

      {renderPage()}
      {console.log(page)}
    </div>
  );
};

export default Pages;
