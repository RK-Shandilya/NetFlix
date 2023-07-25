import React from 'react'
import {OptForm,Feature} from '../components'
import {JumbotronContainer} from '../container/jumbotron'
import {FooterContainer} from '../container/footer'
import {FaqsContainer } from '../container/faqs'
import {HeaderContainer} from '../container/header'

export default function home(){
  return (
    <>
      <HeaderContainer>
      <Feature>
        <Feature.Title>Unlimited movies, TV shows and more</Feature.Title>
        <Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>
        <OptForm>
        <OptForm.Input placeholder="Email address" />
        <OptForm.Button>Get Started</OptForm.Button>
        <OptForm.Break />
        <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
      </OptForm>
      </Feature>
      
      </HeaderContainer>
        <JumbotronContainer/>
        <FaqsContainer/>
        <FooterContainer/>
    </>
  )
}
