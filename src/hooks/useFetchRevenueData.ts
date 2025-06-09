import { useQuery } from '@tanstack/react-query';
import moment from 'moment';
import { fetchRevenueTrends } from '../service/revenueTrends/revenueTrends.service';
export default () => {
    return useQuery({
        queryKey: ['revenueTrends'],
        queryFn: fetchRevenueTrends
    })
}