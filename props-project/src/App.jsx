import React from 'react'
import Card from './components/Card';

const App = () => {
   const jobOpenings =[
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    post:"software engineer",
    company: "Google",
    posted: "5 days ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$150/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    company: "Apple",
    post:"software engineer",
    posted: "2 weeks ago",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$140/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    company: "Meta",
    post:"software engineer",
    posted: "1 week ago",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$120/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    post:"software engineer",
    company: "Amazon",
    posted: "3 days ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$130/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    company: "Netflix",
    post:"software engineer",
    posted: "10 days ago",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: "$160/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    company: "Microsoft",
    posted: "4 days ago",
    post:"software engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$135/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    company: "Tesla",
    post:"software engineer",
    posted: "2 weeks ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$155/hr",
    location: "Delhi, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/adobe.com",
    company: "Adobe",
    post:"software engineer",
    posted: "6 days ago",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$110/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/uber.com",
    company: "Uber",
    post:"software engineer",
    posted: "8 days ago",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$125/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/airbnb.com",
    company: "Airbnb",
    post:"software engineer",
    posted: "3 weeks ago",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: "$145/hr",
    location: "Remote"
  }
];

  return (
    <div className="parent">
      {jobOpenings.map(function(elem){
        return <Card company={elem.company} post={elem.post} posted={elem.posted} brandLogo={elem.brandLogo}/>
      })
      }
    
    </div>
  )
}

export default App;