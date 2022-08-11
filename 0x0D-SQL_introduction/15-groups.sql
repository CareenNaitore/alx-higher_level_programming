-- Lists the number of records with the name score in the table 'second_table'
-- from the database hbtn_0c_0
SELECT score,
COUNT(score) AS number
FROM second_table
GROUP BY score
ORDER BY number DESC;

