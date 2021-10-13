select "co"."name" as "country",
       count("ci".*) as "numberOfCities"
from "countries" as "co"
join "cities" as "ci" using ("countryId")
group by "countryId";
