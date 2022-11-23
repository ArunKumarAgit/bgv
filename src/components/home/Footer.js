import SimpleReactFooter from "simple-react-footer";
export default function Footer() {
  const description =
    "We can help you hire the best IT professionals from outside of the European Union. We take the risks, and you get the best IT professionals from all over the world. \n Koinworx has its own immigration and naturalisation certified staffing agency, so IT professionals from outside of the Europe can work for our clients via a staffing construction. \n Hire highly skilled and flexible immigrant through an IND 'Recognised Sponsor' for both long- and short-term roles, while we take the employer's risk.";
  const title = "bgv";
  const columns = [
    {
      title: "Resources",
      resources: [
        {
          name: "About",
          link: "/about",
        },
        {
          name: "Careers",
          link: "/careers",
        },
        {
          name: "Contact",
          link: "/contact",
        },
        {
          name: "Admin",
          link: "/admin",
        },
      ],
    },
    {
      title: "Legal",
      resources: [
        {
          name: "Privacy",
          link: "/privacy",
        },
        {
          name: "Terms",
          link: "/terms",
        },
      ],
    },
    {
      title: "Visit",
      resources: [
        {
          name: "Locations",
          link: "/locations",
        },
        {
          name: "Culture",
          link: "/culture",
        },
      ],
    },
  ];
  return (
    <SimpleReactFooter
      description={description}
      title={title}
      columns={columns}
      linkedin="fluffy_cat_on_linkedin"
      facebook="fluffy_cat_on_fb"
      twitter="fluffy_cat_on_twitter"
      instagram="fluffy_cat_live"
      youtube="UCFt6TSF464J8K82xeA?"
      pinterest="fluffy_cats_collections"
      copyright="Koinworx"
      iconColor="black"
      backgroundColor="bisque"
      fontColor="black"
      copyrightColor="darkgrey"
    />
  );
}
