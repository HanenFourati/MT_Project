import React from 'react'
import '../CssFiles/ChartSizeTable.css'
const TableOneHeaders = [ { text: ''},
                          { text: 'XXS'},
                          { text: 'P/XS'},
                          { text: 'S'},
                          { text: 'M'},
                          { text: 'L'}, 
                        ] 
const TableOneValues = [ ['Size(US)','25','26', '27-28', '29-30','31.5-33' ],
                         ['Size(EU)', '30', '32', '34-36', '38-40','42-44' ],
                         [ 'Size(UK)','2', '4', '6-8', '10-12', '14-16' ],
                         [ 'Size(JAPAN)', '3','5','7-9', '11-13','15-17' ]
                       ]

const TableTwoHeaders = [ 
                        { text: ''}, 
                        { text: 'XXS'},
                        { text: 'P/XS'},
                        { text: 'S'},
                        { text: 'M'},
                        { text: 'L'}, 
                        { text: 'XL'}, 
                        { text: 'XXL'} 
                        ] 
const TableTwoValues = [ 
                        ['Measurement (BUST)', '31.5', '32.5', '33.5-34.5', '35.5-36.5', '37.-39', '40.5','42'],
                        ['Measurement (WAIST)', '24', '25', '26-27', '28-29', '30-31.5', '33', '34.5'],
                        ['Measurement (HIP)', '34', '35', '36-37', '38-39', '40-41.5', '43', '44.5']
                        ]

const TableThreeHeaders = [ 
                        { text: 'Size'}, 
                        { text: 'Age'},
                        { text: 'Height (in)'},
                        { text: 'Waist'},
                        { text: 'Hip'}
                        ] 
const TableThreeValues = [['2T','2','34.5 - 36.5', '21', '21' ],
                        ['3T', '3', '36.5 - 38.5', '21.5', '22'],
                        [ '4T','4', '38.5 - 41.5', '22-23', '23']
                        ]
const TableFourValues = [['4','4','40 - 42.5', '22', '23' ],
                        ['5', '5', '42.5 - 45', '22.5', '24'],
                        [ '6','6', '45 - 48', '23', '25']
                        ]
const TableFiveHeaders = [   { text: ''},
                            { text: 'XS'},
                            { text: 'S'},
                            { text: 'M'},
                            { text: 'L'}, 
                            { text: 'XL'}
                            ] 
const TableFiveValues = [ ['Size(US)','2-3', '4-5', '6-7-8','10-11' , '14'],
                         ['Height(in)', '34.5-38', '41-44.5', '46-48-53', '55.5-57.5','60.5' ],
                         [ 'Waist','20-20.5', '21-21.5', '22-22.5-23', '24-25', '26' ],
                         [ 'HIP', '21-22','23-24','25-27-28.5', '30-32','34' ]
                          ]

let ShowTable = (props) => 
            <table>
            <tr> 
                {props.thead.map((theadobj, i) => {
                            return (
                                    <th>
                                            {theadobj.text} 
                                    </th>
                                    )
                                }
                        )  
                }
            </tr>
            
            {props.trow.map((trowobj, i) => {
                        return (
                                <tr>        
                                    {trowobj.map((td,i)=>{ return <td>{td}</td>})}
                                </tr>        
                             )
                        }
                    )  
            }
            
        </table>

const  ChartSizeTable = () =>
                            <div className="size_chart_style">
                                <h1 id="size_chart_title_style">SIZE CHART</h1>
                                <h3>WOMEN'S APPAREL</h3>
                                <p >*measurement in inches</p>
                                <ShowTable thead={TableOneHeaders} trow= {TableOneValues}/>
                                <ShowTable thead={TableTwoHeaders} trow= {TableTwoValues}/>
                                <h3>GIRLS' and BABY APPAREL</h3>
                                <p >*measurement in inches</p>
                                <h5>Toddler Girls' Sizes 2-4T</h5>
                                <ShowTable thead={TableThreeHeaders} trow= {TableThreeValues}/>
                                <h5>Girls' Sizes 4-6x</h5>
                                <ShowTable thead={TableThreeHeaders} trow= {TableFourValues}/>
                                <h5>Girls' Sizes 2-14 (XS-XL)</h5>
                                <ShowTable thead={TableFiveHeaders} trow= {TableFiveValues}/>
                            </div>   

export default ChartSizeTable;