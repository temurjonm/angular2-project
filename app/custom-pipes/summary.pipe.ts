/**
 * @author Temur Mahmudov
 */
import {Pipe, PipeTransform} from 'angular2/core'

@Pipe ({ name: 'summary' })
export class SummaryPipe implements PipeTransform {
    transform(value: string, args: string[]) {
        if(value)
            return value.substring(0,50) + "...";
        
    }
}