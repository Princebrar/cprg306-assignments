import Link from "next/link";
export default function StudentInfo() {
    return (
      <main>
        <ul>
            <li>Princejot Singh</li>
            <Link href="https://github.com/Princebrar"><li>Link to my Github Profile</li></Link>
        </ul>
      </main>
    );
  }