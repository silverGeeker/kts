import React from 'react'
import Footer from '../components/footer'
import Icon from '../components/icons'

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                <Footer.Title>About Us</Footer.Title>
                    <Footer.Link href="/about">Story</Footer.Link>
                    <Footer.Link href="/about">Founders</Footer.Link>
                    <Footer.Link href="/about">Teachers</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Courses</Footer.Title>
                    <Footer.Link href="#">UPSC</Footer.Link>
                    <Footer.Link href="#">JEE Mains</Footer.Link>
                    <Footer.Link href="#">Bank PO</Footer.Link>
                    <Footer.Link href="#">GRE</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Contact Us</Footer.Title>
                    <Footer.Link href="/contact">Contact Us</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Social</Footer.Title>
                    <Footer.Link href="#"><Icon className="fab fa-facebook-f" />Facebook</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-instagram" />Instagram</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-youtube" />Youtube</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-twitter" />Twitter</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}