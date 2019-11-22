import React, { Component } from 'react'
import Layout from '../../components/layout/layout'
import * as d3 from 'd3'
import BarChart from '../../components/barchart'
import PieChart from '../../components/piechart';
import Chart from '../../components/chart';
import ProjectBanner from '../../components/project-banner/project-banner'
import mentalIllnessIcon from "../../images/mentalillness-icon.jpg";
import SEO from "../../components/seo"
class MentalIllnesses extends Component {
    render() { 
        const therapies ={
            chart: {
                type: 'column'
            },
            title: {
                text: 'Scientific publications on psychotherapies'
            },
            subtitle: {
                text: 'Source: <a href="https://www.ncbi.nlm.nih.gov" target="_blank">https://www.ncbi.nlm.nih.gov</a>'
            },
            xAxis: {
                type: 'category'
            },
            yAxis: {
                title: {
                    text: 'Number of publications'
                }
        
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                series: {
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true,
                        format: '{point.y:1f}'
                    }
                }
            },
        
            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:1f}</b> publications<br/>'
            },
        
            series: [
                {
                    name: "Psychotherapies",
                    colorByPoint: true,
                    data: [
                        {
                            name: "Behavioral therapy",
                            y: 872357,
                            color:"#6699CC"
                        },
                        {
                            name: "Exposure therapy",
                            y: 633461,
                           color:"#FFF275"
                        },
                        {
                            name: "Cognitive therapy",
                            y: 227826,
                            color:"#FF8C42"
                           
                        },
                        {
                            name: "Psychoanalysis therapy",
                            y: 25574,
                            color:"#FF3C38"
                            
                        },
                        {
                            name: "Pyschodynamic therapy",
                            y: 9048,
                            color:"#A23E48"
                          
                        },
                    ]
                }
            ],
        
        };
        const medication ={
            chart: {
                type: 'column'
            },
            title: {
                text: 'Scientific publications on medication'
            },
            subtitle: {
                text: 'Source: <a href="https://www.ncbi.nlm.nih.gov" target="_blank">https://www.ncbi.nlm.nih.gov</a>'
            },
            xAxis: {
                type: 'category'
            },
            yAxis: {
                title: {
                    text: 'Number of publications'
                }
        
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                series: {
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true,
                        format: '{point.y:1f}'
                    }
                }
            },
        
            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:1f}</b> publications<br/>'
            },
        
            series: [
                {
                    name: "Medication",
                    colorByPoint: true,
                    data: [
                        {
                            name: "Antidepressant",
                            y: 406028,
                            color:"#6B2737"
                        },
                        {
                            name: "Stimulant",
                            y: 199082,
                            color:"#5B2A86"
                           
                        },
                        {
                            name: "Anti Anxiety",
                            y: 115043,
                            color:"#E08E45"
                           
                        },
                        {
                            name: "Anti psychotic",
                            y: 16340,
                            color:"#F8F4A6"
                        },
                        {
                            name: "Mood stabilizer",
                            y: 14792,
                            color:"#BDF7B7"
                          
                        },
                    ]
                }
            ],
        
        };
        const mentaldisorders = {
            chart: {
              type: 'column'
          },
          title: {
              text: 'Scientific publications on mental disorders'
          },
          subtitle: {
              text: 'Click the columns to view disorders in detail. Source: <a href="https://www.ncbi.nlm.nih.gov/" target="_blank">https://www.ncbi.nlm.nih.gov/</a>'
          },
          xAxis: {
              type: 'category'
          },
          yAxis: {
              title: {
                  text: 'Number of publications'
              }
          
          },
          legend: {
              enabled: false
          },
          plotOptions: {
              series: {
                  borderWidth: 0,
                  dataLabels: {
                      enabled: true,
                      format: '{point.y:1f}'
                  }
              }
          },
          
          tooltip: {
              headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
              pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:1f}</b> publications<br/>'
          },
          series: [
              {
                  name: "Mental disorders",
                  colorByPoint: true,
                  data: [
                    {
                      name: "Anxiety disorder",
                      y: 389489,
                      drilldown: "Anxiety disorder"
                  },
                      {
                          name: "Mood disorder",
                          y: 303844,
                          drilldown: "Mood disorder"
                      },
                      
                      
                      {
                          name: "Personality disorder",
                          y: 182322,
                          drilldown: "Personality disorder"
                      },
                      {
                          name: "Psychotic disorder",
                          y: 127259,
                          drilldown: "Psychotic disorder"
                      },
                      {
                        name: "Eating disorder",
                        y: 101085,
                        drilldown: "Eating disorder"
                    }
                  ]
              }
          ],
          drilldown: {
              series: [
          
                  {
                    
                      name: "Mood disorder",
                      id: "Mood disorder",
                      data: [
                        [
                          "Depression",
                          1394345
                      ],
                          [
                              "Bipolar disorder",
                              493579
                          ],
                         
                          [
                              "Depressive disorder",
                              259723
                          ],
                          [
                              "Cyclothymia",
                              2568
                          ],
                      ]
                         
                  },
                  {
                      name: "Anxiety disorder",
                      id: "Anxiety disorder",
                      data: [
                        [
                          "Social anxiety disorder",
                          136913
                      ],
                          [
                              "PTSD",
                              118458
                          ],
                        
                          [
                              "Generalized anxiety disorder",
                              56221
                          ],
                          [
                              "OCD",
                             52231
                          ],
                          [
                              "Phobia",
                              41120
                          ],
                          [
                              "Panic disorder",
                              40929
                          ],
                         
                      ]
                  },
                  {
                      name: "Eating disorder",
                      id: "Eating disorder",
                      data: [
                          [
                              "Anorexia nervosa",
                              49593
                          ],
                          [
                              "Pica",
                              23027
                          ],
                          [
                              "Avoidant or restrictive food intake disorder / ARFID",
                             22065
                          ],
                          [
                              "Bulimia nervosa",
                              18966
                          ],
                          [
                            "Rumination disorder",
                            15433
                          ],
                          [
                            "Binge eating disorder",
                            14038
                          ]
                      ]
                  },
                  
                  {
                      name: "Personality disorder",
                      id: "Personality disorder",
                      data: [
                          [
                              "Schyzoid personality disorder",
                              181461
                          ],
                          [
                              "Narcissistic personality disorder",
                              163447
                          ],
                          [
                              "Borderline personality disorder",
                              23072
                          ],
                          [
                              "Schyzotypal personality disorder",
                              9104
                          ],
                          [
                              "Paranoia & delusional personality disorder",
                              1191
                          ],
                      ]
                  },
                  /*TODO: WHY IS IT NOT WORKING AHHHHHHH */
                  { 
                      name: "Psychotic disorder",
                      id: "Psychotic disorder",
                      data: [
                          [
                              "Schizophrenia",
                              878129
                          ],
                          [
                              "Schizoaffective disorder",
                              127158
                          ],
                          [
                              "Postpartum psychosis",
                              4417
                          ],
                      ]
                  },
              ]
          }
          }; 
        const numbers=[ 493579, 259723,2568];
    var disorders = ["Bipolar disorder","Depressive disorder", "Cyclothymia"];
    function execute(callback) {
            d3.csv("https://gist.githubusercontent.com/victoirebeaufils/bdc33d6da0fb98eacf4b6c7d630c280b/raw", function(data){
            var number = parseInt(data.number);
            var disorder = data.disorder;
              disorders.push(data.disorder);
              numbers.push(number);
              callback(disorders);
             
            });
         }
         disorders.push("nez push");
         
         execute(function(result) {
       
         });
         console.log("disorders")
         console.log(disorders)
        return (

         
           
            <Layout>
                 <SEO title="Scientific interest in mental illnesses" />
      <ProjectBanner title="Scientific interest in mental illnesses" 
      description="I tried to depict the scientific interest in mental illnesses by retrieving data from the U.S National Library of medicine. I searched 36 databases for the selected queries that I think best cover the most prominent mental illnesses. "
      illustration={mentalIllnessIcon}>

      </ProjectBanner>
      <div className="container">
      <br/>
          <hr/>
          <br/>
      <h2>Technologies</h2>
           <div className="row technologies">
           <div className=""> <h3><span className="badge  badge-dark">React</span></h3></div>
               <div className=""> <h3><span className="badge  badge-dark">D3.js</span></h3>
               </div>
               <div className="">  <h3><span className="badge  badge-dark">Highcharts</span></h3>
                </div>


          

            </div>
            <div className="row product-long-description">
                <h2>Overview</h2>
            <p>
            I wanted to get a look at psychologists' areas of primary focus. After narrowing it down to the many disciplines within the field, I figured there were too much for me to draw concise conclusions from because there would have been too many key words to query. 
I thus decided to focus on the field of <strong>mental illnesses</strong>, as it felt like one of the most important fields to me.
            </p>
            <p>
            I divided it in sections based on the type of illnesses, and then listed out the most common ones. I completed my list using <strong>MedlinePlus</strong>, a NIH (National Institute of Health)
product to help me with illnesses I hadn't heard of. 

            </p>
            <p>
            I found the <strong>Entrez Programming Utilities (E-utilities) API</strong> from <strong>NCBI</strong> and thought it could help me with retrieving the number of papers and journal articles related to my query. At first, it seemed as though there was little documentation to read from, so I gave up using an API in favor of the drastically longer but less complicated option, which was to perform manual queries and write the numbers down in a spreadsheet.
            </p>
            <p>Little did I know, there was an API tool that could have helped me make the process automatic, had I dug a little deeper.
</p>
<p>I then looked for a data visualization tool to work across all platforms. I needed it to be personalized, and I settled on <strong>D3.js</strong> as I had already heard of it and it promised a great deal of artistic freedom. Back then, I didn’t know that would also mean a lot had to be written from scratch. 
</p>

<p> I found <strong>Highcharts</strong> as a last resort, and I built my charts. </p>
            </div>

            <br/>
            <Chart className="chart" options={mentaldisorders}/>
            <br/>
<p> You can click on each bar to access a detailed graph of the number of publications with the disorder keywords in it.</p>

<p>There were some parts of this scientific publication analysis that remained unclear. For example, the number of publication with the keyword "Pica" might not accurately represent the number of publications related to the disorder, taking into account the publications in the Proteins and Genomes database  </p>
<p>In addition, it isn't clear whether the search engine counts a document as a result if all of the expression or part of it is in the document.</p>
<p>While it is impossible to accurately tell whether a mental disorder is being studied or treated as it's often a bit of both, I wanted to look at the number of publications for medical treatments.</p> 
   <p>Here, the keyword "antidepressant" returned the largest amount of publications. In comparison, depression was the disorder with the most results, followed by schizophrenia and bipolar disorder.
       The results for depression and its treatment seem to coincide, but those for schizophrenia and bipolar disorder show different results. Antipsychotic medication is prescribed to patients with schizophrenia, and the common type of medication for bipolar disorder is mood stabilizers.
       These appear as the two results with the least amount of publications.</p>
<p> Does that mean that less attention is paid towards treating those disorders medically, or could it be that these medications are so effective that there's no need to look for more options?
       </p>
     
            <br/>
            <Chart options={medication}/>
            <br/>
            <p>Additionally, there are more publications related to psychotherapies than medical treatments. Could that mean that psychotherapies are still developing, or that not enough scientists investigate pharmaceutical products that might not be as effective as they claim to be? </p>
            <br/>
            <Chart options={therapies}/>
            <br/>
            <p>New data would be needed to answer these questions, but this analysis sheds light on an issue within data science: There are many ways to interpret data, and there needs to be different points of view to achieve a general understanding of the subject at cause. </p>
                
      {/* <BarChart data={numbers} titles= {disorders}/>
       <PieChart data={numbers} titles={disorders}/>*/}
       
</div>
       </Layout>) }
}
export default MentalIllnesses