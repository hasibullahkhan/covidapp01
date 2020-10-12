import React from 'react';
import styled from '@emotion/styled';


const Icon = ({ country }) => {

	const Icon = styled.img`  
	width: 40%;
	padding :2%;
		`
	var icon = " ";
	switch (country) {

		case "AF":
			icon = `./img/Afghanistan.png`;

			break;
		case "AL":
			icon = `./img/Albania.png`;
			break;
		case "DZ":
			icon = `./img/Algeria.png`;
			break;
		case "AO":
			icon = `./img/Angola.png`;
			break;
		case "AM":
			icon = `./img/Armenia.png`;
			break;
		case "AU":
			icon = `./img/Australia.png`;
			break;
		case "AT":
			icon = `./img/Austria.png`;
			break;
		case "AZ":
			icon = `./img/Azerbaijan.png`;
			break;
		case "BS":
			icon = `./img/Bahamas.png`;
			break;
		case "BD":
			icon = `./img/Bangladesh.png`;
			break;
		case "BY":
			icon = `./img/Belarus.png`;
			break;
		case "BE":
			icon = `./img/Belgium.png`;
			break;
		case "BZ":
			icon = `./img/Belize.png`;
			break;
		case "BJ":
			icon = `./img/Benin.png`;
			break;
		case "BT":
			icon = `./img/Bhutan.png`;
			break;
		case "BO":
			icon = `./img/Bolivia.png`;
			break;
		case "BA":
			icon = `./img/BosniaandHerzegovina.png`;
			break;
		case "BW":
			icon = `./img/Botswana.png`;
			break;
		case "BR":
			icon = `./img/Brazil.png`;
			break;
		case "BN":
			icon = `./img/BruneiDarussalam.png`;
			break;
		case "BG":
			icon = `./img/Bulgaria.png`;
			break;
		case "BF":
			icon = `./img/BurkinaFaso.png`;
			break;
		case "BI":
			icon = `./img/Burundi.png`;
			break;
		case "KH":
			icon = `./img /Cambodia.png`;
			break;
		case "CM":
			icon = `./img/Cameroon.png`;
			break;
		case "CA":
			icon = `./img/Canada.png`;
			break;
		case "CF":
			icon = `./img/CentralAfricanRepublic.png`;
			break;
		case "TD":
			icon = `./img/Chad.png`;
			break;
		case "CL":
			icon = `./img/Chile`;;
			break;
		case "CN":
			icon = `./img/China.png`;
			break;
		case "CO":
			icon = `./img/Colombia.png`;
			break;
		case "CG":
			icon = `./img/Congo.png`;
			break;
		case "CD":
			icon = `./img/DemocraticRepublicofCongo.png`;;
			break;
		case "CR":
			icon = `./img/CostaRica.png`;
			break;
		case "CI":
			icon = `./img/IvoryCoast.png`;
			break;
		case "HR":
			icon = `./img/Croatia.png`;
			break;
		case "CU":
			icon = `./img/Cuba.png`;
			break;
		case "CY":
			icon = `./img/Cyprus.png`;
			break;
		case "CZ":
			icon = `./img /Czechia.png`;
			break;
		case "DK":
			icon = `./img/Denmark.png`;
			break;
		case "DJ":
			icon = `./img/Djibouti.png`;
			break;
		case "DO":
			icon = `./img/DominicanRepublic.png`;
			break;
		case "EC":
			icon = `./img /Ecuador.png`;
			break;
		case "EG":
			icon = `./img/Egypt.png`;
			break;
		case "SV":
			icon = `./img/ElSalvador.png`;
			break;
		case "GQ":
			icon = `./img/EquatorialGuinea.png`;
			break;
		case "ER":
			icon = `./img/Eritrea.png`;
			break;
		case "EE":
			icon = `./img/Estonia.png`;
			break
		case "ET":
			icon = `./img/Ethiopia.png`;
			break;
		case "FK":
			icon = `./img/FalklandIslands.png`;
			break;
		case "FJ":
			icon = `./img/Fiji.png`;
			break;
		case "FI":
			icon = `./img/Finland.png`;
			break;
		case "FR":
			icon = `./img/France.png`;
			break;
		case "GF":
			icon = `./img/FrenchGuiana.png`;
			break;
		case "TF":
			icon = `./img/FrenchSouthernTerritories.png`;
			break;
		case "GA":
			icon = `./img/Gabon.png`;
			break;
		case "GM":
			icon = `./img/Gambia.png`;
			break;
		case "GE":
			icon = `./img/Georgia.png`;
			break;
		case "DE":
			icon = `./img/Germany.png`;
			break;
		case "GH":
			icon = `./img/Ghana.png`;
			break;
		case "GR":
			icon = `./img/Greece.png`;
			break;
		case "GL":
			icon = `./img/Greenland.png`;
			break;
		case "GT":
			icon = `./img/Guatemala.png`;
			break;
		case "GN":
			icon = `./img/Guinea.png`;
			break;
		case "GW":
			icon = `./img/GuineaBissau.png`;;
			break;
		case "GY":
			icon = `./img/Guyana.png`;
			break;
		case "HT":
			icon = `./img/Haiti.png`;
			break;
		case "HN":
			icon = `./img/Honduras.png`;
			break;
		case "HU":
			icon = `./img/Hungary.png`;;
			break;
		case "IS":
			icon = `./img/Iceland.png`;
			break;
		case "IN":
			icon = `./img/india.png`;
			break;
		case "ID":
			icon = `./img/indonesia.png`;
			break;
		case "IQ":
			icon = `./img/iraq.png`;
			break;
		case "IE":
			icon = `./img/Ireland.png`;
			break;
		case "IL":
			icon = `./img/Israel.png`;
			break;
		case "IT":
			icon = `./img/Italy.png`;
			break;
		case "JM":
			icon = `./img/Jamaica.png`;
			break;
		case "JP":
			icon = `./img/Japan.png`;
			break
		case "JO":
			icon = `./img/Jordan.png`;
			break;
		case "KZ":
			icon = `./img/Kazakhstan.png`;
			break;
		case "KE":
			icon = `./img/Kenya.png`;
			break;
		case "KP":
			icon = `./img/Korea.png`;
			break;
		case "KR":
			icon = `./img/SouthKorea.png`;
			break;
		case "KW":
			icon = `./img/Kuwait.png`;
			break;
		case "KG":
			icon = `./img/Kyrgyzstan.png`;
			break;
		case "LA":
			icon = `./img/Lao.png`;
			break;
		case "LV":
			icon = `./img/Latvia.png`;
			break;
		case "LB":
			icon = `./img/Lebanon.png`;
			break;
		case "LS":
			icon = `./img/Lesotho.png`;
			break;
		case "LR":
			icon = `./img/Liberia.png`;
			break;
		case "LY":
			icon = `./img/Libya.png`;
			break;
		case "LT":
			icon = `./img/Lithuania.png`;
			break;
		case `Lu`:
			icon = `./img/Luxembourg.png`;
			break;
		case "MK":
			icon = `./img/Macedonia.png`;
			break;
		case "MG":
			icon = `./img/Madagascar.png`;
			break;
		case "MW":
			icon = `./img/Malawi.png`;
			break;
		case "MY":
			icon = `./img/Malaysia.png`;
			break;
		case "ML":
			icon = `./img/Mali.png`;
			break;
		case "MR":
			icon = `./img/Mauritania.png`;
			break;
		case "MX":
			icon = `./img/Mexico.png`;
			break;
		case "MD":
			icon = `./img/Moldova.png`;
			break;
		case "MN":
			icon = `./img/Mongolia.png`;
			break;
		case "ME":
			icon = `./img/Montenegro.png`;
			break;
		case "MA":
			icon = `./img/Morocco.png`;
			break;
		case "MZ":
			icon = `./img/Mozambique.png`;
			break;
		case "MM":
			icon = `./img/Myanmar.png`;
			break;
		case "NA":
			icon = `./img/Namibia.png`;
			break;
		case "NP":
			icon = `./img/Nepal.png`;
			break;
		case "NL":
			icon = `./img/Netherlands.png`;
			break;
		case "NC":
			icon = `./img/NewCaledonia.png`;
			break;
		case "NZ":
			icon = `./img/NewZealand.png`;
			break;
		case "NI":
			icon = `./img/Nicaragua.png`;
			break;
		case "NE":
			icon = `./img/Niger.png`;
			break;
		case "NG":
			icon = `./img/Nigeria.png`;
			break;
		case "NO":
			icon = `./img/Norway.png`;
			break;
		case "OM":
			icon = `./img/Oman.png`;
			break;
		case "PK":
			icon = `./img/Pakistan.png`;
			break;
		case "PS":
			icon = `./img/Palestine.png`;
			break;
		case "PA":
			icon = `./img/Panama.png`;
			break;
		case "PG":
			icon = `./img/PapuaNewGuinea.png`;
			break;
		case "PY":
			icon = `./img/Paraguay.png`;
			break;
		case "PE":
			icon = `./img/Peru.png`;
			break;
		case "PH":
			icon = `./img/Philippines.png`;
			break;
		case "PL":
			icon = `./img/Poland.png`;
			break;
		case "PT":
			icon = `./img/Portugal.png`;
			break;
		case "PR":
			icon = `./img/PuertoRico.png`;
			break;
		case "QA":
			icon = `./img/Qatar.png`;
			break;
		case "XK":
			icon = `./img/RepublicofKosovo.png`;
			break;
		case "RO":
			icon = `./img/Romania.png`;
			break;
		case "RW":
			icon = `./img/Rwanda.png`;
			break;
		case "SA":
			icon = `./img/SaudiArabia.png`;
			break;
		case "SN":
			icon = `./img/Senegal.png`;
			break;
		case "RS":
			icon = `./img/Serbia.png`;
			break;
		case "SL":
			icon = `./img/SierraLeone.png`;
			break;
		case "SK":
			icon = `./img/Slovakia.png`;
			break;
		case "SI":
			icon = `./img/Slovenia.png`;
			break;
		case "SB":
			icon = `./img/SolomonIslands.png`;
			break;
		case "SO":
			icon = `./img/Somalia.png`;
			break;
		case "ZA":
			icon = `./img/SouthAfrica.png`;
			break;
		case "SS":
			icon = `./img/SouthSudan.png`;
			break;
		case "ES":
			icon = `./img/Spain.png`;
			break;
		case "LK":
			icon = `./img/SriLanka.png`;
			break;
		case "SD":
			icon = `./img/Sudan.png`;
			break;
		case "SR":
			icon = `./img/Suriname.png`;
			break;
		case "SJ":
			icon = `./img/SvalbardandJanMayen.png`;
			break;
		case "SZ":
			icon = `./img/Swaziland.png`;
			break;
		case "SE":
			icon = `./img/Sweden.png`;
			break;
		case "CH":
			icon = `./img/Switzerland.png`;
			break;
		case "SY":
			icon = `./img/SyrianArabRepublic.png`;
			break;
		case "TW":
			icon = `./img/Taiwan.png`;
			break;
		case "TJ":
			icon = `./img/Tajikistan.png`;
			break;
		case "TZ":
			icon = `./img/Tanzania.png`;
			break;
		case "TH":
			icon = `./img/Thailand.png`;
			break;
		case "TL":
			icon = `./img/TimorLeste.png`;
			break;
		case "TG":
			icon = `./img/Togo.png`;
			break;
		case "TT":
			icon = `./img/TrinidadandTobago.png`;
			break;
		case "TN":
			icon = `./img/Tunisia.png`;
			break;
		case "TR":
			icon = `./img/Turkey.png`;
			break;
		case "TM":
			icon = `./img/Turkmenistan.png`;
			break;
		case "UG":
			icon = `./img/Uganda.png`;
			break;
		case "UA":
			icon = `./img/Ukraine.png`;
			break;
		case "GB":
			icon = `./img/UnitedKingdom.png`;
			break;
		case "US":
			icon = `./img/united-states-of-america.png`;
			break;
		case "UY":
			icon = `./img/Uruguay.png`;
			break;
		case "UZ":
			icon = `./img/Uzbekistan.png`;
			break;
		case "VU":
			icon = `./img/Vanuatu.png`;
			break;
		case "VE":
			icon = `./img/Venezuela.png`;
			break;
		case "EH":
			icon = `./img/WesternSahara.png`;
			break;
		case "YE":
			icon = `./img/Yemen.png`;
			break;
		case "ZM":
			icon = `./img/Zambia.png`;
			break;
		case "ZW":
			icon = `./img/Zimbabwe.png`;
			break;
		case "SG":
			icon = `./img/Singapore.png`;
			break;
		case "HK":
			icon = `./img/HongKong.png`;
			break;
		case "DP":
			icon = `./img/DiamondPrincess.png`;
			break;
		case "IR":
			icon = `./img/Iran.png`;
			break;
		case "RU":
			icon = `./img/Russia.png`;
			break;
		case "AE":
			icon = `./img/UAe.svg`;
			break;
		case "VN":
			icon = `./img/Vietnam.png`;
			break;
		default:
			break;
	}

	return (

		<Icon src={icon} alt="Country flag" />

	)
}
export default Icon;