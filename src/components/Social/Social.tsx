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
import reddit from '../../assets/social/reddit.svg';
import medium from '../../assets/social/medium.svg';
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
    name: 'facebook',
    url: 'https://www.facebook.com/Planetexio',
    img: facebook,
  },
  {
    name: 'twitter',
    url: 'https://twitter.com/planetex_io',
    img: twitter,
  },
  {
    name: 'instagram',
    url: 'https://www.instagram.com/planetex_io/',
    img: instagram,
  },
  { name: 'youtube', url: 'https://www.youtube.com/', img: youtube },
  {
    name: 'telegram',
    url: 'https://t.me/planetexofficial',
    img: telegram,
  },
  { name: 'discord', url: 'https://discord.com/', img: discord },
  {
    name: 'reddit',
    url: 'https://www.reddit.com/user/planetex_io',
    img: reddit,
  },
  { name: 'medium', url: 'https://medium.com/@planetex', img: medium },
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
                  <SocialItem key={link.name}>
                    <SocialLink
                      href={link.url}
                      target={'_blank'}
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
