// @ts-nocheck
/* eslint-disable no-console */
/* eslint-disable max-lines-per-function */
import { FullScreenTheme } from '../../theme';
import { Wrapper, Content, SocialList, SocialItem } from './styles';
import facebook from '../../assets/social/facebook.svg';
import twitter from '../../assets/social/twitter.svg';
import instagram from '../../assets/social/instagram.svg';
import youtube from '../../assets/social/youtube.svg';
import telegram from '../../assets/social/telegram.svg';
import discord from '../../assets/social/discord.svg';

const links = [
  { id: 1, name: 'facebook', url: facebook },
  { id: 2, name: 'twitter', url: twitter },
  { id: 3, name: 'instagram', url: instagram },
  { id: 4, name: 'youtube', url: youtube },
  { id: 5, name: 'telegram', url: telegram },
  { id: 6, name: 'discord', url: discord },
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
                    <img src={link.url} />
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
