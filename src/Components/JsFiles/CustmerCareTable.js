import React from 'react'
import {FaSortDown} from 'react-icons/fa'
import Tabs from './Tabs'
import '../CssFiles/CustmerCareTable.css'
const orderQTable = [ { Question: 'Should I become a registered user?', Answer: 'No, All you need is a e-mail adress and a phone number'},
                      { Question: 'What are my payment options?', Answer: 'the only payment method is pay when the order received'},
                      { Question: 'Why did you call or e-mail me to verify my order?', Answer: 'For your own security and protection, if in the normal course of fraud control we find something suspicious regarding your order, we will call or e-mail you to verify your information.'},
                      { Question: 'How do I know that my order has been shipped?', Answer: 'When your order has been shipped, we will send you another e-mail with your tracking number and a link to where you can track it online.'},
                      { Question: 'How do I change or cancel an order?', Answer: 'Due to the quick processing time, we are unable to cancel or modify an order after it has been placed. Please visit our returns page to initiate a return or exchange if you do not wish to keep the order.'},
                      { Question: 'SIZE CHART', Answer: 'Juicy Couture is designed to flatter a woman body, Simply visit Size chart page for further informations and measurements'},]

const shippingQTable = [ { Question: 'When will my order be shipped? when will it arrive?', Answer: 'Orders ship Monday thru Friday. For same day expedited delivery shipments, orders must be placed prior to 12:00 PM PST. Any orders placed on a Friday after 12:00PM PST will not be processed until the next business day. You will receive an e-mail confirmation once your order has shipped.'},
                         { Question: 'What is the status of my order? how do i track my order?', Answer: 'Once an order has shipped, you will receive a shipment confirmation email that will contain your tracking information. Please contact customer service for additional assistance.'},
                         { Question: 'what is the difference between "order date" and "ship date"?', Answer: ' On most websites, "Order Date" and "Ship Date" are not the same. For example, if you place an order on Friday at 11:00pm PST, your package will not be processed until the next business day. Although most orders are shipped the same or next day, please take weekends and holidays into account when considering the shipping date.'}]

const returnQTable = [ { Question: 'What is your return policy?', Answer:'All sales on MAYAN Tailored are final and can not be returned for a refund or exchange. Shipping charges are non-refundable. '}]
const shippingPTable = [ ['TOTAL ITEMS','One Day Shipping', '4 Day Shipping'],
                         ['1 item', '20DT', '7DT'],
                         ['Many item < 1 Kilo', '30DT', '7DT'],
                         ['Many item > 1 Kilo', '40DT', '14DT']
                        ]
const dropdown= () =>
                    {
                    var dropdown = document.getElementsByClassName("dropdown-btnsyn")
                    var i
                    for (i = 0; i < dropdown.length; i++)
                        {
                        dropdown[i].addEventListener("click", 
                        function() {
                            this.classList.toggle("active")
                            var dropdownContent = this.nextElementSibling
                            if (dropdownContent.style.display === "block") 
                            {
                            dropdownContent.style.display = "none"
                            } 
                            else
                            {
                            dropdownContent.style.display = "block"
                            }
                        })
                        }
                    }

let QATable = (props) => 
                        <div>
                            {props.givenTable.map((itemsobj, i) => {
                                        return (
                                                <div className="question_answer_style">
                                                    <button className="dropdown-btnsyn" onClick={dropdown} > {itemsobj.Question} <FaSortDown/></button>
                                                    <div className="dropdown-containersyn"> <p> {itemsobj.Answer}</p></div>
                                                </div>
                                                )
                                            }
                                    )  
                            }
                        </div>

const  CustmerCareTable = () =>
                            <div className="custumercare_style">
                                <h1 style={{textAlign: "center"}}>Customer Care </h1>
                                <div className="custumercare_tabs_section_style"> 
                                    <Tabs>
                                            <div label="FAQs">
                                                <h3>Frequently asked questions</h3>
                                                <p>Here we will answer your questions about shopping at our online store,your online orders,payment options and more.</p>
                                                <h2>Ordering Questions:</h2>
                                                <QATable givenTable={orderQTable}/>
                                                <h2>Shipping questions:</h2>
                                                <QATable givenTable={shippingQTable}/>
                                                <h2>RETURN and EXCHANGE QUESTIONS:</h2>
                                                <QATable givenTable={returnQTable}/>
                                            </div>
                                            <div label="SHIPPING">
                                                <h1>Shipping</h1>
                                                <p>Here you will find all the information on the best way to receive your order.</p>
                                                <h3>Standard shipping rates</h3>
                                                <p>Free Domestic Shipping on all TUNISIA orders over depands to the colis weight.</p>
                                                <table>
                                                    {shippingPTable.map((obj, i) => {
                                                                return (
                                                                        <tr>        
                                                                            {obj.map((td,i)=>{ return <td>{td}</td>})}
                                                                        </tr>        
                                                                    )
                                                                }
                                                            )  
                                                    } 
                                                </table>
                                            </div>
                                            <div label="RETURN">
                                                <h1>Returns and Exchanges</h1>
                                                <p>All sales on MAYAN Tailored are final and can not be returned for a refund or exchange.<br/>

                                                Shipping charges are non-refundable. <br/>

                                                Items purchased from MAYAN Tailored can not be returned in-store. <br/>

                                                Unfortunately, we can not accept merchandise returns for items purchased from other retailers or websites. </p>
                                            </div>
                                        </Tabs>
                                    </div>
                            </div>   

export default CustmerCareTable