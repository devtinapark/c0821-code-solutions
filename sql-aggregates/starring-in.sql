select "c"."name" as "filmCategory",
       count("c".*) as "count"
from "castMembers"
join "actors" as "a" using ("actorId")
join "filmCategory" using ("filmId")
join "categories" as "c" using ("categoryId")
where "a"."firstName" = 'Lisa' and "a"."lastName"  = 'Monroe'
group by "categoryId";
