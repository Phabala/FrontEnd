-- girl_group 과 song 테이블로 응용해서 작성해봤다.
select * from girl_group;

SELECT A.gid, SUM(B.sid)
	FROM girl_group A, song B 
    WHERE A.gid = 1018
    AND A.hit_song_id = B.sid
    group by A.gid;