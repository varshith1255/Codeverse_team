import TopBar from '@/components/TopBar/TopBar';
import Workspace from '@/components/Workspace/Workspace';
import React from 'react';
import { problems } from "@/utils/problems";
import { Problem } from "@/utils/types/problem";
import useHasMounted from '@/hooks/useHasMounted';
type ProblemPageProps = {
	problem: Problem;
};

const ProblemPage: React.FC<ProblemPageProps> = ({ problem }) => {
    const hasMounted = useHasMounted();
  
  if(!hasMounted) return null
    return (
        <div>
            <TopBar problemPage={true} />
            <Workspace problem={problem}/>
        </div>
    )
}
export default ProblemPage;
// fetch the local data
//  SSG
// getStaticPaths => it create the dynamic routes
export async function getStaticPaths() {
	const paths = Object.keys(problems).map((key) => ({
		params: { pid: key },
	}));

	return {
		paths,
		fallback: false,
	};
}

// getStaticProps => it fetch the data

export async function getStaticProps({ params }: { params: { pid: string } }) {
	const { pid } = params;
	const problem = problems[pid];

	if (!problem) {
		return {
			notFound: true,
		};
	}
	problem.handlerFunction = problem.handlerFunction.toString();
	return {
		props: {
			problem,
		},
	};
}