import { Composition } from 'remotion';
import { ReelAuditiva } from './ReelAuditiva';
import { ReelStorytelling } from './ReelStorytelling';

export const Root = () => {
  return (
    <>
      <Composition
        id="ReelAuditiva"
        component={ReelAuditiva}
        durationInFrames={35 * 30}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="ReelStorytelling"
        component={ReelStorytelling}
        durationInFrames={820}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
