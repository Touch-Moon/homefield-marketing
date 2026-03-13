export type Province = "alberta" | "manitoba" | "saskatchewan";

export interface Location {
  city: string;
  address: string;
  postalCode: string;
  phone?: string;
  email: string;
  website?: string;
  province: Province;
}

export const locations: Location[] = [
  // ─── Alberta ──────────────────────────────────────────────────────────────
  {
    city: "Airdrie",
    address: "Unit 30 105 Main Street N",
    postalCode: "T4B 0R3",
    phone: "403.217.1061",
    email: "info@myhomefield.ca",
    province: "alberta",
  },
  {
    city: "Cochrane",
    address: "10A Railway Street East",
    postalCode: "T4C 2B5",
    phone: "403.851.0017",
    email: "info@myhomefield.ca",
    province: "alberta",
  },
  {
    city: "High River",
    address: "11-5th Avenue SE",
    postalCode: "T1V 1G2",
    phone: "403.652.2472",
    email: "info@myhomefield.ca",
    province: "alberta",
  },
  {
    city: "Lacombe",
    address: "4720 Hwy 2A",
    postalCode: "T4L 1H4",
    phone: "403.786.0194",
    email: "info@myhomefield.ca",
    province: "alberta",
  },
  {
    city: "Okotoks",
    address: "Bay 3, 22 Elizabeth Street",
    postalCode: "T1S 1B7",
    phone: "403.995.9611",
    email: "info@myhomefield.ca",
    province: "alberta",
  },
  {
    city: "Strathmore",
    address: "265 Edgefield Place",
    postalCode: "T1P 0E8",
    phone: "403.902.1111",
    email: "info@myhomefield.ca",
    province: "alberta",
  },

  // ─── Manitoba ─────────────────────────────────────────────────────────────
  {
    city: "Altona",
    address: "201-125 Centre Avenue",
    postalCode: "R0G 0B0",
    phone: "204.324.6464",
    email: "info@myhomefield.ca",
    province: "manitoba",
  },
  {
    city: "Boissevain",
    address: "420 South Railway",
    postalCode: "R0K 0E0",
    phone: "204.534.6000",
    email: "info@myhomefield.ca",
    province: "manitoba",
  },
  {
    city: "Portage la Prairie",
    address: "2390 Sissons Drive",
    postalCode: "R1N 0G5",
    phone: "204.239.5111",
    email: "info@myhomefield.ca",
    province: "manitoba",
  },
  {
    city: "Steinbach",
    address: "105-32 Brandt Street",
    postalCode: "R5G 2J7",
    phone: "204.326.3737",
    email: "info@myhomefield.ca",
    province: "manitoba",
  },
  {
    city: "Winkler",
    address: "277-A 1st Street",
    postalCode: "R6W 4A6",
    phone: "204.325.9506",
    email: "info@myhomefield.ca",
    province: "manitoba",
  },
  {
    city: "Winnipeg",
    address: "1-741 St. Mary's Road",
    postalCode: "R2M 3N5",
    phone: "204.452.9602",
    email: "info@myhomefield.ca",
    province: "manitoba",
  },

  // ─── Saskatchewan ─────────────────────────────────────────────────────────
  {
    city: "Estevan",
    address: "Suite 200 - 1236 5th Street",
    postalCode: "S4A 0Z6",
    phone: "306.634.1280",
    email: "info@myhomefield.ca",
    province: "saskatchewan",
  },
  {
    city: "Humboldt",
    address: "640 10th Street",
    postalCode: "S0K 2A0",
    phone: "306.682.2255",
    email: "info@myhomefield.ca",
    province: "saskatchewan",
  },
  {
    city: "Kindersley",
    address: "404 12th Ave E",
    postalCode: "S0L 1S0",
    phone: "306.463.2692",
    email: "info@myhomefield.ca",
    province: "saskatchewan",
  },
  {
    city: "Moose Jaw",
    address: "1704 Main Street N",
    postalCode: "S6J 1L4",
    phone: "306.694.0800",
    email: "info@myhomefield.ca",
    province: "saskatchewan",
  },
  {
    city: "Rosetown",
    address: "209 Hwy #4",
    postalCode: "S0L 2V0",
    phone: "306.882.2686",
    email: "info@myhomefield.ca",
    province: "saskatchewan",
  },
  {
    city: "Shaunavon",
    address: "407 Centre St",
    postalCode: "S0N 2M0",
    phone: "306.297.2671",
    email: "info@myhomefield.ca",
    province: "saskatchewan",
  },
  {
    city: "Swift Current",
    address: "300 - 198 1st Ave",
    postalCode: "S9H 2B2",
    phone: "306.773.6397",
    email: "info@myhomefield.ca",
    province: "saskatchewan",
  },
  {
    city: "Weyburn",
    address: "305 Souris Avenue",
    postalCode: "S4H 0C6",
    phone: "306.848.1190",
    email: "info@myhomefield.ca",
    province: "saskatchewan",
  },
  {
    city: "Saskatoon",
    address: "219 Robin Crescent - 2nd Floor",
    postalCode: "S7L 6M8",
    email: "info@myhomefield.ca",
    website: "https://saskatoonmediagroup.com/marketing-services/",
    province: "saskatchewan",
  },
];

export const PROVINCE_LABELS: Record<Province, string> = {
  alberta: "Alberta",
  manitoba: "Manitoba",
  saskatchewan: "Saskatchewan",
};

export const PROVINCE_ORDER: Province[] = ["alberta", "manitoba", "saskatchewan"];
