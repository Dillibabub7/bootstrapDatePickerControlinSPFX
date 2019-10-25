import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import { SPComponentLoader } from '@microsoft/sp-loader';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './SpfxWebPartWebPart.module.scss';
import * as strings from 'SpfxWebPartWebPartStrings';

export interface ISpfxWebPartWebPartProps {
  description: string;
}

export default class SpfxWebPartWebPart extends BaseClientSideWebPart<ISpfxWebPartWebPartProps> {

  public constructor()
  {
    super();
    SPComponentLoader.loadScript("https://code.jquery.com/jquery-1.12.4.min.js",{}).then(()=>{

    SPComponentLoader.loadCss("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css");
    SPComponentLoader.loadScript("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js");
    SPComponentLoader.loadCss("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.6.4/css/bootstrap-datepicker.css");
    SPComponentLoader.loadScript("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.6.4/js/bootstrap-datepicker.js");



    });

  }


    public render(): void {
    this.domElement.innerHTML = `
      <div class="${ styles.spfxWebPart }">
        <div class="${ styles.container }">
        <div class="container">
	
    <div class="row">
     
        <div class="col-sm-6">
            <div class="input-group date" data-provide="datepicker">
                <input type="text" class="form-control" id="data-date">
                <div class="input-group-addon">
                    <span class="glyphicon glyphicon-th"></span>
                </div>
            </div>
        </div>
    </div>
   
   
   
</div>

        </div>
      </div>`;
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
