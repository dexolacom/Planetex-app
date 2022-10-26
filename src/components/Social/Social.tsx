// @ts-nocheck
/* eslint-disable no-console */
/* eslint-disable max-lines-per-function */
import { FullScreenTheme } from '../../theme';
import facebook from '../../assets/social/facebook.svg';
import twitter from '../../assets/social/twitter.svg';
import instagram from '../../assets/social/instagram.svg';
import youtube from '../../assets/social/youtube.svg';
import telegram from '../../assets/social/telegram.svg';
import discord from '../../assets/social/discord.svg';
import {
  Wrapper,
  Content,
  SocialList,
  SocialItem,
  SocialLink,
  SocialImg,
} from './styles';

const links = [
  {
    id: 1,
    name: 'facebook',
    url: 'https://www.facebook.com/Planetexio',
    img: facebook,
  },
  {
    id: 2,
    name: 'twitter',
    url: 'https://twitter.com/planetex_io',
    img: twitter,
  },
  {
    id: 3,
    name: 'instagram',
    url: 'https://www.instagram.com/planetex_io/',
    img: instagram,
  },
  { id: 4, name: 'youtube', url: '', img: youtube },
  {
    id: 5,
    name: 'telegram',
    url: 'https://t.me/planetexofficial',
    img: telegram,
  },
  { id: 6, name: 'discord', url: '', img: discord },
];

const SocialContent = () => {
  return (
    <>
      <FullScreenTheme>
        <Wrapper>
          <Content>
            <SocialList>
              {links.map((link) => {
                return (
                  <SocialItem key={link.id}>
                    <SocialLink
                      href={link.url}
                      onClick={() => console.log(link.name)}
                    >
                      <SocialImg src={link.img} />
                    </SocialLink>
                  </SocialItem>
                );
              })}
            </SocialList>
          </Content>
        </Wrapper>
      </FullScreenTheme>
    </>
  );
};

export default SocialContent;
