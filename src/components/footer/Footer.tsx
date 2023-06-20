//Components
import FooterSection from "./FooterSection";
import List from "./List";
import Logo from "../Logo";
import SocialMedia from "./SocialMedia";
import NavbarContainer from "../navbar/NavbarContainer";
//Data
import { Footer_List_1, Footer_List_2, Footer_List_3, Footer_List_4, Footer_List_5, Footer_List_6 } from "../../utilities/staticData";
//Others
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook  } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <NavbarContainer additionClass={'divide-y divide-gray-500'}>
      <FooterSection additionClass={'grid grid-cols-2 md:grid-cols-3'} >
        <div className="flex flex-col md:grid md:grid-cols-3 gap-1 justify-between w-full justify-items-center items-center">
          <List itemList={Footer_List_1}/>
          <List itemList={Footer_List_2}/>
          <List itemList={Footer_List_3}/>
        </div>
        <Logo>quietform.</Logo>
        <div className="flex flex-col md:grid md:grid-cols-3 gap-1 justify-between w-full justify-items-center items-center">
          <List itemList={Footer_List_4}/>
          <List itemList={Footer_List_5}/>
          <List itemList={Footer_List_6}/>
        </div>
      </FooterSection>
      <FooterSection additionClass={'grid grid-cols-1 md:grid-cols-1'}>
          <div>
          <SocialMedia path='https://twitter.com/'>
            <FontAwesomeIcon icon={faTwitter}  size="xl"/>
          </SocialMedia>
          <SocialMedia path='https://www.instagram.com/'>
            <FontAwesomeIcon icon={faInstagram} size="xl"/>
          </SocialMedia>
          <SocialMedia path='https://www.facebook.com/'>
            <FontAwesomeIcon icon={faFacebook} size="xl"/>
          </SocialMedia>
          </div>
      </FooterSection>
    </NavbarContainer>
  )
}