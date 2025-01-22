import React from "react";
import { Link } from "react-router-dom";

const Skill = () => {
    return(
        <div className="skillMainDiv">
            <span className="skill_typewriter"></span>
            <div className="skillsDescription">
                <div className="individualSkills">
                    <div className="skillHeading"> Frontend</div>
                    <div className="skillLogo">
                        <img src="https://img.icons8.com/?size=48&id=20909&format=png" alt="html"/>
                        <img src="https://img.icons8.com/?size=48&id=21278&format=png" alt="css"/>
                        <img src="https://img.icons8.com/?size=48&id=108784&format=png" alt="js"/>
                        <img src="https://img.icons8.com/?size=40&id=Nlsua06Gvxel&format=png" alt="react"/>
                        <img src="https://img.icons8.com/?size=48&id=jD-fJzVguBmw&format=png" alt="redux"/>
                        <img src= "https://img.icons8.com/?size=48&id=84710&format=png" alt="bootstrap"/>
                        <img src="https://th.bing.com/th/id/OIP.JZalsE6VHDfwwy5razg_XQAAAA?w=431&h=402&rs=1&pid=ImgDetMain" alt="Material UI"/>
                    </div>
                </div>
                <div className="individualSkills">
                    <div className="skillHeading">Backend & Coding</div>
                    <div className="skillLogo">
                        <img src="https://th.bing.com/th?id=OIP.bkbn2-K7c9rMBV5dvYXDrQHaIh&w=233&h=268&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="C"/>
                        <img src="https://img.icons8.com/?size=48&id=40669&format=png" alt="C++"/>
                        <img src="https://img.icons8.com/?size=48&id=13679&format=png" alt="Java"/>
                        <img src="https://img.icons8.com/?size=48&id=13441&format=png" alt="Python"/>
                        <img src="https://img.icons8.com/?size=48&id=54087&format=png" alt="Node"/>
                        <img src="https://img.icons8.com/?size=40&id=WNoJgbzDr3i2&format=png" alt="Express"/>
                    </div>
                </div>
                <div className="individualSkills">
                    <div className="skillHeading">DB & Tools</div>
                    <div className="skillLogo">
                        <img src="https://img.icons8.com/?size=48&id=UFXRpPFebwa2&format=png" alt="MySQL"/>
                        <img src="https://img.icons8.com/?size=48&id=bosfpvRzNOG8&format=png" alt="MongoDB"/>
                        <img src="https://img.icons8.com/?size=48&id=0OQR1FYCuA9f&format=png" alt="VS Code"/>
                        <img src="https://img.icons8.com/?size=48&id=61466&format=png" alt="IntelliJ"/>
                        <img src="https://w7.pngwing.com/pngs/28/245/png-transparent-postman-hd-logo-thumbnail.png" alt="PostMan"/>
                        <img src="https://img.icons8.com/?size=80&id=sbhfmWq4KRr1&format=png" alt="Github"/>
                        <img src="https://img.icons8.com/?size=48&id=lOqoeP2Zy02f&format=png" alt="Colab"/>
                    </div>
                </div>
                <div className="individualSkills">
                    <div className="skillHeading">Coding Platforms</div>
                    <div className="skillLogo">
                        <Link to="https://leetcode.com/u/dharshinik2022/"> <img src="https://th.bing.com/th?id=OIP.ymdLUYayjisO2uU47lOI0AHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="Leetcode"/> </Link>
                        <Link to="https://codeforces.com/profile/Dharsh06"> <img src="https://solidhelium.gallerycdn.vsassets.io/extensions/solidhelium/codeforces-submitter/1.0.0/1710981064378/Microsoft.VisualStudio.Services.Icons.Default" alt="codeforces"/> </Link>
                        <Link to="https://www.codechef.com/users/dharshini_44"> <img src="https://img.icons8.com/?size=48&id=LnZMjt9rZC3d&format=png" alt="codechef"/> </Link>
                        <Link to="https://www.geeksforgeeks.org/user/dharshiniklf2e/"> <img src="https://img.icons8.com/?size=48&id=AbQBhN9v62Ob&format=png" alt="GeeksforGeek"/> </Link>
                        <Link to="https://www.skillrack.com/faces/resume.xhtml?id=483088&key=a3fbaf27b2810aa8ba9cc48c5b0b5e019475dfc9"> <img src="https://th.bing.com/th?id=OIP.5y8tbbFKDWpkBrsN0wz47wHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="Skillrack"/> </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill;