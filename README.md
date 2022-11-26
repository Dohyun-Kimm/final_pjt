# 지브리의 숲

<br>

## 0. 프로젝트 개요

- 프로젝트명 : 지브리의 숲 (forest of ghibli)
- 프로젝트 컨셉 : 지브리 영화 커뮤니티 웹사이트
- 개발 기간 : 22.11.08(화) ~ 22.11.25 (금)
- 사용 기술스택 : Django, HTML, CSS, JavaScript

- 개발 일지 (노션링크) : https://cactus-silkworm-e8c.notion.site/1770dbf90db745099305cfb6c4db645e

- 팀원 정보 :

<table>
  <tr>
    <td align="center"><a href="https://github.com/bohodays"><img src="https://avatars.githubusercontent.com/u/109454527?v=4?s=100" width="100px;" alt=""/><br /><sub><b>박중원 bohodays<br /></a>Front & Back</b></sub><br /></td>    
    <td align="center"><a href="https://github.com/Dohyun-Kimm"><img src="https://avatars.githubusercontent.com/u/109256734?v=4?s=100" width="100px;" alt=""/><br /><sub><b>김도현 Dohyun-Kimm<br /></a>Front & Back</b></sub><br /></td>        
  </tr>
</table><br/>

<br>

<br>



## 1. 목표 서비스 구현 및 실제 구현 정도

| <center>목표</center>                                        | <center>실제 구현</center>                                   |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| <center>Account</center>                                     | <center>100%</center>                                        |
| 1. 유저 회원가입 기능<br />2. 유저 로그인 기능<br />3. 유저 로그아웃 기능<br />4. 유저 비밀번호 변경 기능<br />5. 유저 프로필 수정 기능<br />6. 유저의 내 정보 보기 기능<br />7. 회원탈퇴 기능<br />8. 북마크 기능 | 1. 유저 회원가입 기능<br />2. 유저 로그인 기능<br />3. 유저 로그아웃 기능<br />4. 유저 비밀번호 변경 기능<br />5. 유저 프로필 수정 기능<br />6. 유저의 내 정보 보기 기능<br />7. 회원탈퇴 기능<br />8. 북마크 기능 |
| <center>Movie</center>                                       | <center>92%</center>                                         |
| 1. FILMS 페이지<br />2. 영화 상세 페이지<br />3. DIRECTORS 페이지<br />4. 영화 감독 상세 페이지<br />5. GBTI 페이지(설문-결과)<br />6. QUIZ 페이지(풀이-결과)<br />7. 지브리 영화 검색 기능<br />8. 지브리 영화 캐릭터 인기투표 페이지<br />9. 영화 리뷰 생성 기능<br />10. 영화 리뷰 삭제 기능<br />11. 영화 리뷰 수정 기능<br />12. 영화 리뷰 좋아요 기능<br />13. 영화 리뷰 삭제 기능 | 1. FILMS 페이지<br />2. 영화 상세 페이지<br />3. DIRECTORS 페이지<br />4. 영화 감독 상세 페이지<br />5. GBTI 페이지(설문-결과)<br />6. QUIZ 페이지(풀이-결과)<br />7. 지브리 영화 검색 기능<br />8. 영화 리뷰 생성 기능<br />9. 영화 리뷰 삭제 기능<br />10. 영화 리뷰 수정 기능<br />11. 영화 리뷰 좋아요 기능<br />12. 영화 리뷰 삭제 기능 |
| <center>responsive web</center>                              | <center>80%</center>                                         |
| 1. 반응형 웹사이트 구현                                      | 1. 부분적으로 반응형 웹사이트 구현                           |



<br>

<br>



## 2.  데이터베이스 모델링 (ERD)

![img](https://cactus-silkworm-e8c.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fad809454-4855-4a72-b875-6d9b2441eeae%2FUntitled.png?table=block&id=9c95f5d3-ba55-4303-a286-d38b5a9dd046&spaceId=dd881eeb-b329-4edc-bb7c-14a91e45e834&width=2000&userId=&cache=v2)



<br>

<br>



## 3. Wireframe & Design

`피그마`

https://www.figma.com/file/vXuBc6w0viB4nAlZr0jyGU/%EC%A7%80%EB%B8%8C%EB%A6%AC%EC%9D%98-%EC%88%B2?node-id=0%3A1&t=3xdfvMdmsV6lsOCu-0

![img](https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/209eb535-a9e8-4087-ba4a-5031bb956a95)



<br>

<br>



## 4. 서비스 기능에 대한 설명

##### 1) 인트로 페이지

![ezgif com-gif-maker (25)](https://user-images.githubusercontent.com/109454527/204095305-58755e4c-b041-4dcc-b6ee-12d18ac155cb.gif)

- 인트로 페이지에서는 웹사이트의 이름과 함께 컨셉에 대해 간단히 소개했습니다.
- 화면을 클릭하거나 아무키를 입력하게 되면 메인 페이지로 이동하게 됩니다.



<br>

