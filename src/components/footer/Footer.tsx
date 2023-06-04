import Logo from "../Logo";
import FooterSection from "./FooterSection";
import List from "./List";
import SocialMedia from "./SocialMedia";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook  } from '@fortawesome/free-brands-svg-icons';

const itemList1 = [
  {
    title: 'Shop',
    path: '/shop'
  }
]
const itemList2 = [
  {
    title: 'Category',
    path: '/'
  },
]
const itemList3 = [
  {
    title: 'Contacts',
    path: '/contacts'
  },
]
const itemList4 = [
  {
    title: 'About',
    path: '/about'
  },
]
const itemList5 = [
  {
    title: 'Blog',
    path: '/'
  },
]
const itemList6 = [
  {
    title: 'Support',
    path: '/'
  }
]

export default function Footer() {
  return (
    <div className="min-h-[10vh] px-8 py-4 lg:px-20 xl:px-40 divide-y divide-gray-500">
      <FooterSection sm_cols={2} md_cols={3} >
        <div className="flex flex-col md:grid md:grid-cols-3 gap-1 justify-between w-full justify-items-center items-center">
          <List itemList={itemList1}/>
          <List itemList={itemList2}/>
          <List itemList={itemList3}/>
        </div>
        <Logo>quietform.</Logo>
        <div className="flex flex-col md:grid md:grid-cols-3 gap-1 justify-between w-full justify-items-center items-center">
          <List itemList={itemList4}/>
          <List itemList={itemList5}/>
          <List itemList={itemList6}/>
        </div>
      </FooterSection>
      <FooterSection sm_cols={1} md_cols={1}>
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
    </div>
  )
}
